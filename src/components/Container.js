const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>This is title of container</h2>
      {children}
      <p>The value is: {myValue}</p>
    </div>
  );
};

export default Container;
