function AddTodo() {
  return <div class="row">
    <div class="col-6">
      <input type="text" placeholder="enter todo here" />
    </div>
    <div class="col-4"><input type="date" name="date" id="date" />
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-success">add</button>
    </div>
  </div>
}
export default AddTodo;