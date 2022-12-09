import axios from "axios";

const allpatientsUrl = "http://localhost:3010/patient/allpatient";
const singlepatientUrl = "http://localhost:3010/patient/allpatient/:id?";
const patientsremove = "http://localhost:3010/patient/removepatient";
const usersedit = "http://localhost:3010/doctor/editdoctor";

export const getPatients = async (id) => {
  id = id || "";
  // debugger;
  try {
    return await axios.get(`${allpatientsUrl}/${id}`);
  } catch (error) {
    console.log("Error while calling getUsers api ", error);
  }
};

export const addPatient = async (user) => {
  return await axios.post("http://localhost:3010/patient/addPatient", user);
};

export const deletePatient = async (id) => {
  return await axios.delete(`${patientsremove}/${id}`);
};

export const editPatient = async (id, user) => {
  return await axios.put(`${singlepatientUrl}/${id}`, user);
};
