#sdk using check 
import vertexai
from vertexai.language_models import ChatModel, InputOutputTextPair, TextEmbeddingModel
from vertexai.vision_models import MultiModalEmbeddingModel
from vertexai.generative_models import GenerativeModel

# Initialize Vertex AI SDK
vertexai.init(project="your-project-id", location="us-central1")

# Load a pre-trained chat model from Vertex AI
chat_model = ChatModel.from_pretrained("chat-bison")

# Start a chat session
chat_session = chat_model.start_chat()

# Create an InputOutputTextPair object for the conversation
message = InputOutputTextPair(input_text="Hello, how are you?", output_text="I am doing well!")

# Send a message and get the response
response = chat_session.send_message(message.input_text)
print(f"Response: {response}")

# Load a pre-trained Text Embedding Model
embedding_model = TextEmbeddingModel.from_pretrained("textembedding-gecko")

# Load a MultiModal Embedding Model
multimodal_model = MultiModalEmbeddingModel.from_pretrained("multimodal-embedding-model-id")

# Example usage of a generative model
generative_model = GenerativeModel.from_pretrained("generative-model-id")
generative_response = generative_model.start_chat()

print(f"Generative Model Response: {generative_response}")
