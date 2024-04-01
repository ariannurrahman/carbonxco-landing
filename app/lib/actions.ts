'use server';

import { z } from 'zod';
import { BASE_URL } from '../constant';
import axios from 'axios';

export type InitialState = {
  errors: {
    firstName?: string[] | undefined;
    lastName?: string[] | undefined;
    email?: string[] | undefined;
    phone?: string[] | undefined;
    address?: string[] | undefined;
  };
  message: string;
};

const ApplyJobSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  address: z.string().min(1),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  file: z.any(),
  id: z.string(),
});

const ApplyJob = ApplyJobSchema.omit({});

export async function applyJob(prevState: InitialState | undefined, formData: FormData) {
  const validatedFields = ApplyJob.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    city: formData.get('city'),
    state: formData.get('state'),
    postalCode: formData.get('postalCode'),
    file: formData.get('file'),
    id: formData.get('id'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to apply.',
    };
  }

  const { firstName, lastName, address, city, state, postalCode, phone, email, file, id } = validatedFields.data;

  const fileFormData = new FormData();
  fileFormData.append('file', file);
  fileFormData.append('reference_type', 'careers');
  fileFormData.append('document_type', 'applicants_cv');
  fileFormData.append('id', '');

  const { data: fileResponse } = await axios.post(`${BASE_URL}/documents`, fileFormData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  const payload = {
    name: firstName + ' ' + lastName,
    address: `${address} ${city} ${state} ${postalCode}`,
    phone,
    email,
    documents: [
      {
        id: '',
        file_type: fileResponse.file_type,
        file_name: fileResponse.file_name,
        url: fileResponse.url,
        document_type: 'applicant_cv',
        key: fileResponse.key,
      },
    ],
  };

  await axios.post(`${BASE_URL}/applicants/${id}`, payload);
}
