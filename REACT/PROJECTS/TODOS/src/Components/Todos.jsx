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
    console.log(todo)
  };

  const selectAll=()=>{

  }





  return (
    <>
      <h1>list of todos</h1>
      < button onClick={selectAll}>SelectAll</button>

      {/* {
        todo && 
      } */}

      {todo.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              width: '180%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 'auto',
            }}
          >
            <input onClick={()=>Checked(el.id)} type="checkbox" />

            {el.isEdit ? (
              <input
                name="edit_items"
                type="text"
                defaultValue={el.text}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <h1>{el.text}</h1>
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