function AddTodo() {
  return <div className="conatiner text-center">
    <div class="row a-row">
    <div class="col-6">
      <input type="text" placeholder="enter todo here" />
    </div>
    <div class="col-4"><input type="date" name="date" id="date" />
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-success a-btn">add</button>
    </div>
  </div>
  </div>
}
export default AddTodo;