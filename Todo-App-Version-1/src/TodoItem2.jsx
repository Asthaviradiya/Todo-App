function TodoItem2(){
    let name = 'Go To College';
    let date = ' 4/10/2023'

    return <div class="container text-center">
    <div class="row">
      <div class="col-6">
        {name}
      </div>
      <div class="col-4">
       {date}
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-danger">delete</button>
        </div>
    </div>
    </div>
}
export default TodoItem2;