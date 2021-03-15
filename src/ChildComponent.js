function ChildComponent(props) {
  const { name, age } = props;
  //destructuring 비구조화
  return (
    <h3>나는 {name}입니다. {age}살 입니다.</h3>
  )
}

export default ChildComponent;