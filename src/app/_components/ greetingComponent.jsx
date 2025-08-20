const Greeting = (props) => {
  console.log(props);
  const a = props.ner;
  return <div>Greetings {a}</div>;
};

export default Greeting;
