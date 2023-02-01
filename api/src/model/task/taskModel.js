import taskSchema from "./taskSchema.js"; 
// insert
export const insertTask = taskObj =>{
   return taskSchema(taskObj).save()
}


// select


export const getTasks = () => {
  return taskSchema.find();
};

export const getsingleTask = (_id) => {
  return taskSchema.findById(_id);
};



// update




// delete