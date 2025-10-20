import type { Timestamp } from 'firebase/firestore';

export interface Service {
  id: string;
  name: string;
  description: string;
  details?: string[];
  imageUrl: string;
  slug: string;
}

// O tipo PetProfile pode ser removido ou adaptado se não for mais necessário.
// Por enquanto, será mantido para evitar quebras em arquivos não alterados.
export interface PetProfile {
  id: string;
  name: string;
  protocol: string;
  cremationDate: Timestamp;
  petType: 'dog' | 'cat' | 'bird' | 'other';
  breed?: string;
  personality: string;
  ownerName: string;
  favoriteActivity: string;
  imageUrl: string;
  gallery?: string[];
  memorialCode: string;
}
