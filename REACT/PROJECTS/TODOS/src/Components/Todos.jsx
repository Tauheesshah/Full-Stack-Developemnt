import { useState } from 'react';

export const Todos = ({ props }) => {
  const [editText, setEditText] = useState('');

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
    console.log(updated)
  };

  const selectAll=()=>{
     const updated  = todo.map(el => ({...el, isChecked: true
  }));
  setTodo(updated );
  console.log(updated)
  }
  const deselectAll = () => {
    const updated = todo.map(el => ({...el,isChecked: false
    }));
    setTodo(updated);
    console.log(updated)
  };
  const allChecked = todo.length > 0 && todo.every(el => el.isChecked);

  const DeleteAll=()=>{
    const deleteItems = todo.filter((el) => !el.isChecked);
    setTodo(deleteItems);
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
      {/* {
        todo && 
      } */}

      {todo.map((el) => {
        return (
          <div
            key={el.id}
            className={`todo-item ${el.isChecked ? "completed" : ""}`}
          >
            {/* <input onClick={()=>Checked(el.id)} type="checkbox" /> */}
            <input
              type="checkbox"
              checked={el.isChecked }
              onChange={() => Checked(el.id)}
            />

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
          </div>
        );
      })}
    </>
  );
};