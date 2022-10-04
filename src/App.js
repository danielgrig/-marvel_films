import { useState } from "react";
import './App.css';

const initNotes = [
	{ text: 'note1', isEdit: false },
	{ text: 'note2', isEdit: false },
	{ text: 'note3', isEdit: false },
];

function App() {
	const [notes, setNotes] = useState(initNotes);

	function startEdit(index) {
		const copy = Object.assign([], notes);
		copy[index].isEdit = true;
		setNotes(copy);
	}

	function onChangeNote(index, event) {
		const copy = Object.assign([], notes);
		copy[index].text = event.target.value;
		setNotes(copy);
	}

	function endEdit(index) {
		const copy = Object.assign([], notes);
		copy[index].isEdit = false;
		setNotes(copy);

	}

	const result = notes.map((note, index) => {
		let elem;
		if (!note.isEdit) {
			elem = <span onClick={() => startEdit(index)}>{note.text}</span>;
		} else {
			elem = <input value={note.text}
						  onChange={event => onChangeNote(index, event)}
						  onBlur={() => endEdit(index)}
			/>
		}

		return <li key={index}>{elem}</li>;
	});

	return <ul>
		{result}
	</ul>
}

export default App;
