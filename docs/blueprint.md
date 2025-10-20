# **App Name**: Instituto Target

## Core Features:

- Memorial Gallery: Display pet profiles in a gallery, fetching data from Firestore's 'pet_profiles' collection. Enable real-time search and filtering by Protocol, Cremation Date, and Name.
- Pet Profile Page: Create dynamic profile pages by fetching pet data from Firestore based on the memorialCode URL parameter, showing pet details and a photo gallery.
- Admin Interface (Firebase): Secure admin area to manage memorial content.
- Contact Form: Implement a contact form that sends data to WhatsApp.
- Generative Memorial: Using the information the memorial keeper entered about the departed pet, create a custom poem in their memory

## Style Guidelines:

- Primary color: Dark Green for main buttons, links, and highlighted titles.
- Background color: Black for the main site background.
- Accent color: White for secondary details and highlights.
- Headline font: 'Playfair Display' (serif) for section titles to convey elegance.
- Body font: 'Poppins' (sans-serif) for paragraphs, buttons, and labels to ensure clarity and modernity.
- Use icons related to each pet service using a minimalist style.
- Cards with subtle shadows (shadow-lg) and light animations on hover (hover:-translate-y-1, transition-all) using ShadCN UI components.
- Implement 3D flip effects for plan cards (/planos) and pet type icons on the homepage.