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
export const updateTask = (_id, type) => {
  return taskSchema.findByIdAndUpdate(_id, { type: type }, { new: true })  
   
}



// delete single item by id
export const deleteTaskById = (_id) => {
  return taskSchema.findByIdAndDelete(_id);
}

// delete many items from the array of ids
export const deleteManyTasks = (ids) => {
  return taskSchema.deleteMany({_id:{$in:ids}});
};