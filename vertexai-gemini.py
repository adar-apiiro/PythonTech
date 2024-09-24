# Assume location_tool is a function or class previously defined
from vertexai.generative_models import GenerativeModel, GenerationConfig

# Load the Gemini generative model with custom configuration and tools
model = GenerativeModel(
    "gemini-1.5-flash-001",  # Model ID
    generation_config=GenerationConfig(temperature=0),  # Deterministic response generation
    tools=[location_tool]  # Extra tools provided to the model
)

# Example: Use the model to generate a response
response = model.generate("What is the capital of France?")
print(response)  # Should print: "Paris"
