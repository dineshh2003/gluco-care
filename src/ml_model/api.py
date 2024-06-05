import joblib
import pandas as pd
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Literal

# Load the model
model = joblib.load("model.pkl")

# Create the FastAPI app
app = FastAPI()

# Define the input data model
class DiabetesPredictionRequest(BaseModel):
    gender: Literal["Male", "Female"]
    age: float
    hypertension: int
    heart_disease: int
    smoking_history: Literal["never", "current", "former", "No Info"]
    bmi: float
    HbA1c_level: float
    blood_glucose_level: float

# Define the preprocessing function
def preprocess_input(input_data: DiabetesPredictionRequest):
    # Convert input data to DataFrame
    input_df = pd.DataFrame([input_data.dict()])

    # Perform necessary preprocessing
    input_df['gender'] = input_df['gender'].map({'Male': 0, 'Female': 1})
    input_df['smoking_history'] = input_df['smoking_history'].map({
        'never': 0,
        'current': 1,
        'former': 2,
        'No Info': 3
    })

    return input_df

# Define the prediction endpoint
@app.post("/predict")
def predict(request: DiabetesPredictionRequest):
    try:
        # Preprocess the input data
        input_df = preprocess_input(request)

        # Make prediction
        prediction = model.predict(input_df)[0]

        # Return the result
        return {"diabetes": int(prediction)}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Run the app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")
