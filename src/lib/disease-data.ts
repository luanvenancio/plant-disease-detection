export interface DiseaseInfoData {
  description: string;
  treatment: string[];
  source: string;
}

export const diseaseData: Record<string, DiseaseInfoData> = {
  bacterialspot: {
    description:
      "Bacterial Spot is a common disease affecting peppers and tomatoes, caused by Xanthomonas species. It appears as small, water-soaked spots on leaves that later become dark and necrotic. It can also affect fruits, causing raised, scabby lesions.",
    treatment: [
      "Avoid overhead watering to reduce leaf wetness.",
      "Ensure good air circulation by properly spacing plants and pruning.",
      "Remove and destroy infected plant debris.",
      "Apply copper-based bactericides as a preventative measure, especially in humid weather.",
    ],
    source: "https://en.wikipedia.org/wiki/Bacterial_leaf_spot",
  },
  earlyblight: {
    description:
      "Early Blight, caused by the fungus Alternaria solani, affects potatoes and tomatoes. It is characterized by small, dark lesions, often with a 'target-spot' or 'bulls-eye' appearance on lower leaves. It can lead to significant defoliation.",
    treatment: [
      "Plant disease-resistant varieties if available.",
      "Use mulch to prevent fungal spores from splashing onto plants.",
      "Prune lower leaves to improve air circulation.",
      "Apply fungicides like chlorothalonil or mancozeb when conditions are favorable for disease.",
    ],
    source: "https://en.wikipedia.org/wiki/Alternaria_solani",
  },
  lateblight: {
    description:
      "Late Blight is a destructive fungal disease that can quickly destroy tomato and potato plants. It thrives in cool, moist conditions and appears as pale green, water-soaked spots on leaves.",
    treatment: [
      "Remove and destroy infected plants immediately to prevent spread.",
      "Ensure good air circulation around plants.",
      "Apply copper-based or other approved fungicides as a preventative measure.",
      "Avoid overhead watering; water at the base of the plant.",
    ],
    source: "https://en.wikipedia.org/wiki/Phytophthora_infestans",
  },
  leafmold: {
    description:
      "Leaf Mold, caused by the fungus Passalora fulva, primarily affects tomatoes grown in high humidity. It appears as pale greenish-yellow spots on the upper leaf surface, with olive-green to brown fungal growth on the underside.",
    treatment: [
      "Improve air circulation and reduce humidity in greenhouses.",
      "Prune lower leaves to reduce disease spread.",
      "Avoid wetting the foliage when watering.",
      "Use resistant varieties and apply appropriate fungicides if needed.",
    ],
    source: "https://en.wikipedia.org/wiki/Tomato_leaf_mold",
  },
  septorialeafspot: {
    description:
      "Septoria leaf spot is a common fungal disease that affects tomatoes. It typically appears as small, circular spots with dark borders and a tan or gray center on the lower leaves first.",
    treatment: [
      "Prune affected lower leaves to improve air flow.",
      "Use mulch to prevent fungal spores from splashing from the soil onto the leaves.",
      "Rotate crops each year; avoid planting tomatoes in the same spot.",
      "Apply fungicides containing chlorothalonil or mancozeb if necessary.",
    ],
    source: "https://en.wikipedia.org/wiki/Septoria_lycopersici",
  },
  spidermitestwospottedspidermite: {
    description:
      "The Two-spotted Spider Mite is a common pest, not a disease, that affects a wide range of plants including tomatoes. They feed by piercing plant cells, causing fine, yellow stippling on leaves. Severe infestations produce visible webbing.",
    treatment: [
      "Spray plants with a strong stream of water to dislodge mites.",
      "Introduce predatory insects like ladybugs or predatory mites.",
      "Apply insecticidal soaps or horticultural oils.",
      "For severe cases, use a miticide according to label directions.",
    ],
    source: "https://en.wikipedia.org/wiki/Tetranychus_urticae",
  },
  targetspot: {
    description:
      "Target Spot, caused by the fungus Corynespora cassiicola, affects tomatoes and other crops. It produces characteristic leaf spots with a 'bulls-eye' pattern, similar to Early Blight, but lesions are often larger and more zonate.",
    treatment: [
      "Maintain good field sanitation and remove infected plant debris.",
      "Improve air circulation and avoid overhead irrigation.",
      "Apply preventative fungicides such as mancozeb or chlorothalonil.",
      "Practice crop rotation with non-host plants.",
    ],
    source: "https://en.wikipedia.org/wiki/Corynespora_cassiicola",
  },
  tomatoyellowleafcurlvirus: {
    description:
      "Tomato Yellow Leaf Curl Virus (TYLCV) is a viral disease transmitted by whiteflies. Infected plants show severe stunting, upward curling and yellowing of leaves, and a significant reduction in fruit production.",
    treatment: [
      "Control whitefly populations using insecticides or physical barriers like netting.",
      "Remove and destroy infected plants immediately to reduce virus sources.",
      "Plant virus-resistant tomato varieties.",
      "There is no cure for infected plants; prevention is key.",
    ],
    source: "https://en.wikipedia.org/wiki/Tomato_yellow_leaf_curl_virus",
  },
  tomatosaicvirus: {
    description:
      "Tomato Mosaic Virus (ToMV) causes a mosaic or mottled pattern of light green and dark green areas on leaves. It can also cause leaf distortion and stunting. The virus is highly stable and easily transmitted by touch.",
    treatment: [
      "Wash hands thoroughly before and after handling plants.",
      "Avoid using tobacco products near tomato plants, as they can carry the virus.",
      "Remove and destroy infected plants.",
      "Control weeds that may act as alternative hosts for the virus.",
    ],
    source: "https://en.wikipedia.org/wiki/Tomato_mosaic_virus",
  },
  powderymildew: {
    description:
      "Powdery Mildew is a fungal disease that affects many plants, including squash. It appears as white, powdery spots on leaves and stems. If left untreated, it can cause leaves to yellow and die, reducing plant vigor.",
    treatment: [
      "Ensure good air circulation and avoid overcrowding plants.",
      "Apply fungicides, horticultural oils, or a solution of potassium bicarbonate.",
      "Remove and destroy heavily infected leaves.",
      "Choose resistant varieties when available.",
    ],
    source: "https://en.wikipedia.org/wiki/Powdery_mildew",
  },
  healthy: {
    description:
      "The plant appears to be in good health. No signs of common fungal or bacterial diseases were detected on the provided image.",
    treatment: [
      "Continue regular watering and feeding schedule.",
      "Monitor for pests and signs of stress.",
      "Ensure adequate sunlight and air circulation.",
    ],
    source: "General plant care best practices.",
  },
};
