
let keyCount = 1;
let taskArray = [];

function Task()
{
  this.key = null;
  this.name = '';
  this.desc = '';
  this.prior = 1;
  this.destroy = () => {
    taskArray.splice(taskArray.indexOf(Task[key][this.key]),1);
    clear();
    renderAll(taskArray);
  }
};



$(".add").on("click", () => {
 if ($('#addName').val() != '' && $('#addDesc').val() != '') {
   let task = new Task();
   task.key = keyCount;
   keyCount++;
   task.name = $('#addName').val();
   task.desc = $('#addDesc').val();
   task.prior = $('#addPrior').val();
   taskArray.push(task);
   console.log(task);
   renderAll(taskArray);
 }
 else {
   console.log('error');
 }
});

$(".destroy").on("click", 'button', () => {
  console.log('clicked');
  for (let i = 0; i < taskArray.length; i++) {
    if (taskArray[i].key == this.parents(2).attr('id').val())
      $(this.parents(2).attr('id')).delete();
  }
});

makeTemplate = (key, name, desc, prior) => {
  let template = `<tr class = "task" id = ${key}>`;
      template += `<td class = "title task-item">${name}</td>`;
      template += `<td class = <"descrip task-item">${desc}</td>`;
      template += `<td class = <"priority task-item">${prior}</td>`;
      template += `<td class = "actions">`;
      template += `<button class = "edit btn btn-warning">Edit</button>`;
      template += `<button class = "destroy btn btn-danger">Remove</button>`;
      template += `<button class = "update btn btn-success">Update</button>`;
      template += `<button class = "cancel btn btn-danger">Cancel</button>`;
      template += `</td>`;
      template += `</tr>`;
  return template;
}

clear = () => {
   $("#content").html('');
}

renderAll = (taskArray) => {
  clear();
  console.log(taskArray);
  taskArray.forEach((data) => {
        $("#content").append(makeTemplate(data.key, data.name, data.desc, data.prior));
  });
}

renderOne = (task) => {
  $("#content").append(makeTemplate(task.key, task.name, task.desc, task.prior));
}
