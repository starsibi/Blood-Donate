
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getEligibilityAdvice = async (healthStatus: string, lastDonationDate: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Determine blood donation eligibility. Health Status: ${healthStatus}. Last Donation Date: ${lastDonationDate}. Current Date: ${new Date().toLocaleDateString()}. Provide a concise status and any specific advice.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isEligible: { type: Type.BOOLEAN },
            reason: { type: Type.STRING },
            advice: { type: Type.STRING },
            nextSuggestedDate: { type: Type.STRING }
          },
          required: ["isEligible", "reason", "advice"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      isEligible: false,
      reason: "Unable to determine eligibility at this time.",
      advice: "Please consult with a medical professional at the donation center.",
      nextSuggestedDate: "N/A"
    };
  }
};

export const searchCenters = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The user is searching for blood donation centers using query: "${query}". Based on typical naming conventions, suggest 3-5 realistic mock centers for a prototype UI. Include Name, City, State, and Open/Closed status.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              city: { type: Type.STRING },
              state: { type: Type.STRING },
              status: { type: Type.STRING }
            }
          }
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    return [];
  }
};
