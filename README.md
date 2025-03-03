# TrustTag: **Decentralized Resume Verification System**

![Project Logo](https://via.placeholder.com/150) <!-- Add a logo if you have one -->

A blockchain-based system for securely storing and verifying resumes and academic credentials using NFTs. Built with **Node.js**, **Express**, **MongoDB**, **Solidity**, and **Web3.js**.

---

## **Table of Contents**
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Running Locally](#running-locally)
5. [Smart Contract Deployment](#smart-contract-deployment)
6. [API Documentation](#api-documentation)
7. [Contributing](#contributing)
8. [License](#license)

---

## **Features**
- **Resume Upload**: Students can upload their resumes, which are hashed and stored on the blockchain.
- **Resume Verification**: Employers can verify the authenticity of resumes using the stored hash.
- **Academic Credentials as NFTs**: Students can mint their academic records as NFTs.
- **Decentralized Storage**: All data is stored securely on the blockchain.
- **Role-Based Access**: Different roles for students, employers, and admins.

---

## **Tech Stack**
### **Backend**
- **Node.js**: Runtime environment.
- **Express**: Web framework for building APIs.
- **MongoDB**: Database for storing user and resume data.
- **JWT**: Authentication and authorization.

### **Blockchain**
- **Solidity**: Smart contract development.
- **Web3.js**: Interacting with the blockchain from the backend.
- **Ganache**: Local Ethereum blockchain for testing.
- **Truffle**: Smart contract development framework.

### **Frontend (Optional)**
- **React.js**: Frontend framework (if you have a frontend).
- **Ethers.js**: Interacting with the blockchain from the frontend.

---

## **Installation**
Follow these steps to set up the project locally.

### **Prerequisites**
- Node.js (v16.x or above)
- MongoDB (or MongoDB Atlas for cloud database)
- Ganache (for local blockchain testing)
- Truffle (for smart contract deployment)

### **Steps**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/avanish-garg/TrustTag.git
   cd TrustTag/backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the `backend` directory and add the following variables:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_key
   CONTRACT_ADDRESS=0xA2e6575Ad46bCCD1E05Eb88527DFAAAb290fD168
   WEB3_PROVIDER=http://localhost:7545
   ```

4. **Deploy Smart Contract**:
   - Navigate to the `blockchain` directory:
     ```bash
     cd ../blockchain
     ```
   - Compile and deploy the contract:
     ```bash
     truffle compile
     truffle migrate --network development
     ```
   - Update the `CONTRACT_ADDRESS` in `.env` with the deployed contract address.

---

## **Running Locally**
1. **Start the Backend Server**:
   ```bash
   cd ../backend
   npm start
   ```
   The server will start at `http://localhost:5000`.

2. **Start Ganache**:
   - Open Ganache and start a local Ethereum blockchain.
   - Ensure the RPC server is running at `http://localhost:7545`.

3. **Test the APIs**:
   Use **Postman** or any API testing tool to test the endpoints. Refer to the [API Documentation](#api-documentation) for details.

---

## **Smart Contract Deployment**
### **Contract Details**
- **Contract Name**: `StudentCredentials`
- **Network**: Ganache (Local) or Polygon (Production)
- **ABI**: Located in `blockchain/build/contracts/StudentCredentials.json`

### **Deployment Steps**
1. Compile the contract:
   ```bash
   truffle compile
   ```

2. Deploy to Ganache:
   ```bash
   truffle migrate --network development
   ```

3. Deploy to Polygon (Optional):
   - Update `truffle-config.js` with Polygon network details.
   - Run:
     ```bash
     truffle migrate --network polygon
     ```

---

## **API Documentation**
### **Base URL**
```
http://localhost:5000/api
```

### **Endpoints**
#### **1. User Authentication**
- **Register User**: `POST /auth/register`
  ```json
  {
    "name": "Avanish Garg",
    "email": "avanish@example.com",
    "username": "avanish",
    "password": "password123",
    "role": "student",
    "address": "0x1234..."
  }
  ```

- **Login User**: `POST /auth/login`
  ```json
  {
    "email": "avanish@example.com",
    "password": "password123"
  }
  ```

#### **2. Resume Management**
- **Upload Resume**: `POST /resumes/upload`
  - **Headers**: `Authorization: Bearer <JWT_TOKEN>`
  - **Body**: Form-Data with `resume` file.

- **Verify Resume**: `POST /resumes/verify`
  ```json
  {
    "studentAddress": "0x1234...",
    "resumeHash": "a1b2c3d4e5f6..."
  }
  ```

#### **3. Blockchain Integration**
- **Upload Resume to Blockchain**: `POST /blockchain/upload-resume`
  ```json
  {
    "studentAddress": "0x1234...",
    "resumeHash": "a1b2c3d4e5f6..."
  }
  ```

- **Get Academic Record**: `GET /blockchain/get-academic-record/:tokenId`

---

## **Contributing**
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgements**
- **OpenZeppelin**: For secure smart contract templates.
- **Ganache**: For local blockchain testing.
- **Web3.js**: For blockchain interaction.

---

## **Contact**
- **Avanish Garg**: [GitHub](https://github.com/avanish-garg) | [Email](mailto:avanish@example.com)

---

Feel free to customize this template further, bhai! Let me know if you need any more help. 😊🚀
