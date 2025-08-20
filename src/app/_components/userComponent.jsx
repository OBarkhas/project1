const User = (props) => {
  const a = props.ner.name;
  const b = props.ner.age;
  const c = props.ner.email;
  const d = props.ner.imgUrl;
  return (
    <div>
      <p>Name: {a}</p>
      <p>age: {b}</p>
      <p>email: {c}</p>
      <p>imgUrl: {d}</p>
    </div>
  );
};

export default User;
