const fs = require("fs");
const OpenAI = require("openai");


async function main() {
  try {
    const openai = new OpenAI({ apiKey });

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt:
        "Generate a realistic laptop", // Include any desired additional details
      size: "1792x1024",
      quality: "hd",
      n: 1,
    });

    // Write response to a text file
    fs.appendFileSync(
      "image_responses.txt",
      JSON.stringify(response, null, 2) + "\n"
    );
    console.log("Responses saved to image_responses.txt");
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
