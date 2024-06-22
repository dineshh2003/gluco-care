import React, { useState , ChangeEvent, FormEvent} from 'react';

const PredictDiabetesForm = () => {
  const [prediction, setPrediction] = useState<'Yes' | 'No' | null>(null);

  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    hypertension: false,
    heartDisease: false,
    smokingHistory: '',
    bmi: '',
    hba1cLevel: '',
    bloodGlucose: '',
    diabetes: 'no'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type, checked } =e.target as HTMLInputElement;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setPrediction(data.diabetes === 1 ? 'Yes' : 'No');

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-auto w-[70vw] h-fit-content">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Predict Diabetes Chances</h2>
        </div>
        <form className="p-4 flex flex-wrap" onSubmit={handleSubmit}>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 ">Age</label>
            <input type="number" id="age" name="age" value={formData.age} className="mt-1 px-4 py-2 w-64 border rounded-md focus:outline-none focus:ring focus:border-blue-500" onChange={handleChange} />
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select id="gender" name="gender" value={formData.gender} className="mt-1 px-4 py-2 w-64 border rounded-md focus:outline-none focus:ring focus:border-blue-500" onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="hypertension" className="block text-sm font-medium text-gray-700">Hypertension</label>
            <input type="checkbox" id="hypertension" name="hypertension" checked={formData.hypertension} className="mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500" onChange={handleChange} />
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="heartDisease" className="block text-sm font-medium text-gray-700">Heart Disease</label>
            <input type="checkbox" id="heartDisease" name="heartDisease" checked={formData.heartDisease} className="mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500" onChange={handleChange} />
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="smokingHistory" className="block text-sm font-medium text-gray-700">Smoking History</label>
            <select id="smokingHistory" name="smokingHistory" value={formData.smokingHistory} className="mt-1 px-4 py-2 w-64 border rounded-md focus:outline-none focus:ring focus:border-blue-500" onChange={handleChange}>
              <option value="never">Never</option>
              <option value="current">Current</option>
              <option value="former">Former</option>
              <option value="No Info">No Info</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="bmi" className="block text-sm font-medium text-gray-700">BMI</label>
            <input type="number" id="bmi" name="bmi" value={formData.bmi} className="mt-1 px-4 py-2 w-64 border rounded-md focus:outline-none focus:ring focus:border-blue-500" onChange={handleChange} />
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="hba1cLevel" className="block text-sm font-medium text-gray-700">HbA1c Level</label>
            <input type="number" id="hba1cLevel" name="hba1cLevel" value={formData.hba1cLevel}
                        className="px-4 py-2 w-64 border rounded-md focus:outline-none focus:ring focus:border-blue-500" onChange={handleChange} />
                        </div>
                        <div className="w-full sm:w-1/2 mb-4">
                          <label htmlFor="bloodGlucose" className="block text-sm font-medium text-gray-700">Blood Glucose</label>
                          <input type="number" id="bloodGlucose" name="bloodGlucose" value={formData.bloodGlucose} className="mt-1 px-4 py-2 w-64 border rounded-md focus:outline-none focus:ring focus:border-blue-500" onChange={handleChange} />
                        </div>
                       
                        <div className="w-full">
                          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
                        </div>
                      </form>
                      {prediction && (
                        <div className="p-4">
                          <h3 className="text-lg font-semibold">Prediction:</h3>
                          <p>{`Likelihood of diabetes: ${prediction}`}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              };
              
              export default PredictDiabetesForm;
              
