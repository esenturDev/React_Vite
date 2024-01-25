// import { useEffect } from "react";
import { useState } from "react";

const App = () => {
	const [data, setData] = useState([]);
	const [input, setInput] = useState("0");
  // const [buttonOn, setButtonOn] = useState('');
  console.log(input);
	const getData = async () => {
		try {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character`
			);
			const responseData = await response.json();
      const filtered = await responseData.results.filter((item) => item.id <= input)
      console.log(responseData.results);
			setData(filtered);
		} catch (e) {
			console.error(e);
		}
	};
	// useEffect(() => {
	// 	getData();
  //   // setInput();
	// }, []);
	return (
		<div>
			<input
				type="number"
				onChange={(e) => {
					setInput(e.target.value);
				}}
			/>
      <button>Add</button>
			{data.map((el) => (
				<div key={el.id}>
					<h2>{el.name}</h2>
					<p>{el.status}</p>
          <img src={el.image} alt=""  style={{width: 200}}/>
				</div>
			))}
      <button onClick={getData}>Add</button>
		</div>
	);
};

export default App;
