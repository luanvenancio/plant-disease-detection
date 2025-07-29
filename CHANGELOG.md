# Changelog

## [2.0.0] - 2025-07-28

### Features

- **Detailed Diagnosis View**: Implemented a "Learn More" feature that opens a modal with a detailed description, treatment advice, the next two most likely diagnoses and source links for detected plant diseases.
- **Reliability Score & Tooltip**: The analysis result now displays a numerical confidence score alongside the reliability category (High, Medium, Low). A new tooltip explains what each level means, improving user trust.

### Improvements & UI/UX

- **Complete UI Overhaul**: Redesigned the entire application, focusing on high-quality animations and visual feedback.
- **Animated Transitions**: Added smooth, animated transitions between the loading state and the final result card using Framer Motion.
- **Dynamic Image Preview**: The file uploader was enhanced with a responsive image preview that includes a progressive blur effect on hover, revealing file details.

### Refactoring & Performance

- **Backend Architecture**: Shifted from an insecure, client-side API call to a robust Next.js API route that acts as a secure proxy to the analysis service.
- **Official Gradio Client**: Replaced manual `fetch` calls with the official `@gradio/client` library, resulting in more reliable and maintainable code for interacting with the backend service.
- **Client-Side Image Resizing**: Integrated `react-image-file-resizer` into the file upload hook to optimize images before upload.

### Fixes

- **API Integration**: Resolved a series of `404`, `405`, and parsing errors by correctly identifying and targeting the official, working Gradio Space for the model.
- **TypeScript Errors**: Corrected various TypeScript errors related to component props and API response parsing.
