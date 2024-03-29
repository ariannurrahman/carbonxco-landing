export interface Project {
  id: string;
  title: string;
  description: string;
  start_date: string;
  location: string;
  area: string;
  area_description: string;
  ecosystem_type: string;
  community: string;
  main_goal: string;
  key_factor: string;
  other: string;
  sdg: string[];
  status: string;
  button_text: string;
  button_link_to: string;
  createdAt: string;
  updatedAt: string;
  documents: Documents[];
}

export interface Documents {
  id: string;
  reference_id: string;
  reference_type: string;
  key: string;
  file_name: string;
  file_type: string;
  document_type: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  start_date: string;
  location: string;
  area: string;
  area_description: string;
  ecosystem_type: string;
  community: string;
  main_goal: string;
  key_factor: string;
  other: string;
  sdg: string[];
  status: string;
  button_text: string;
  button_link_to: string;
  createdAt: string;
  updatedAt: string;
  documents: Documents[];
}
