import { useState } from 'react';

export const Todos = ({ props }) => {
  const [editText, setEditText] = useState('');
  // const [pinItems,setPinItems]= useState([])
  const { todo, setTodo } = props;

  const handleDelete = (id) => {
    const deleteItems = todo.filter((el) => el.id !== id);
    setTodo(deleteItems);
  };

  const handleEdits = (id) => {
    const editItems = todo.map((el) =>
      el.id === id ? { ...el, isEdit: true } : el,
    );
    setTodo(editItems);
  };

  const handleCancel = (id) => {
    const editItems = todo.map((el) =>
      el.id === id ? { ...el, isEdit: false } : el,
    );
    setTodo(editItems);
  };

  const handleConfirm = (id) => {
    if (editText.trim() === '') return;
    const editItems = todo.map((el) =>
      el.id === id ? { ...el, isEdit: false, text: editText } : el,
    );
    setTodo(editItems);
  };

  const Checked = (id)=>{
    const updated = todo.map((el) =>
    el.id === id ? { ...el, isChecked: !el.isChecked } : el);
    setTodo(updated);
  };

  const selectAll=()=>{
    const updated  = todo.map(el => ({...el, isChecked: true}));
    setTodo(updated );
  }


  const deselectAll = () => {
    const updated = todo.map(el => ({...el,isChecked: false}));
    setTodo(updated);
  };
  const allChecked = todo.length > 0 && todo.every(el => el.isChecked);

  const DeleteAll=()=>{
    const deleteItems = todo.filter((el) => !el.isChecked);
    setTodo(deleteItems);
  }

  const handlePinItems = (id)=>{
    const pin_Data = todo.map((el)=>el.id===id ? {...el,isPinned:!el.isPinned} : el)
    setTodo(pin_Data)
    // setPinItems((prev)=>[...prev,...pin_value]);

    // const unPin_value = todo.filter((el)=>el.id!=id)
    // setTodo(unPin_value)
  }





  if (todo.length===0){
    return<h1>NO DATA Found</h1>
  }
  return (
    <>
    <div className='MainDiv'>
      <h1>List of Todos</h1>
      <button onClick={allChecked ? deselectAll : selectAll}>
        {allChecked ? "Deselect All" : "Select All"}
      </button>
      <button onClick={DeleteAll}>Delete ALL</button>
    </div>

    <h3>Pin Data</h3>

    {todo
      .filter(el => el.isPinned)
      .map((el,i)=>{
      return(
        <div
            key={el.id}
            className={`todo-item ${el.isChecked ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={el.isChecked }
              onChange={() => Checked(el.id)}
            />

            {/* <h4>{el.id}</h4> */}
            <h4>{i+1}</h4>

            {el.isEdit ? (
              <input
                name="edit_items"
                type="text"
                defaultValue={el.text}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <h4>{el.text}</h4>
            )}

            {el.isEdit ? (
              <>
                <button
                  onClick={() => handleCancel(el.id)}
                  style={{ height: 'fit-content' }}
                >
                  cancel
                </button>
                <button
                  onClick={() => handleConfirm(el.id)}
                  style={{ height: 'fit-content' }}
                >
                  confirm
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleEdits(el.id)}
                  style={{ height: 'fit-content' }}
                >
                  edit
                </button>
                <button
                  onClick={() => handleDelete(el.id)}
                  style={{ height: 'fit-content' }}
                >
                  delete
                </button>
              </>
            )}
            <button onClick={()=> handlePinItems(el.id)}>UnPIN</button>
          </div>
      )
    })}
    
     
    <hr></hr>
    <h3>UnPin Data</h3>
      {todo
        .filter(el => !el.isPinned)
        .map((el,i) => {
        return (
          <div
            key={el.id}
            className={`todo-item ${el.isChecked ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={el.isChecked }
              onChange={() => Checked(el.id)}
            />
          <h4>{i+1}</h4>
          {/* <h4>{el.id}</h4> */}
            {el.isEdit ? (
              <input
                name="edit_items"
                type="text"
                defaultValue={el.text}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <h4>{el.text}</h4>
            )}

            {el.isEdit ? (
              <>
                <button
                  onClick={() => handleCancel(el.id)}
                  style={{ height: 'fit-content' }}
                >
                  cancel
                </button>
                <button
                  onClick={() => handleConfirm(el.id)}
                  style={{ height: 'fit-content' }}
                >
                  confirm
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleEdits(el.id)}
                  style={{ height: 'fit-content' }}
                >
                  edit
                </button>
                <button
                  onClick={() => handleDelete(el.id)}
                  style={{ height: 'fit-content' }}
                >
                  delete
                </button>
              </>
            )}
            <button onClick={()=> handlePinItems(el.id)}>PIN</button>
          </div>
        );
      })}
    </>
  );
};