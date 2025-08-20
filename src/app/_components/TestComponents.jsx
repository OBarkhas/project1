const Test = (props) => {
  console.log(props);
  const a = props.too;
  const b = props.hello;
  return (
    <div>
      test compo {a} {b}
    </div>
  );
};

export default Test;
