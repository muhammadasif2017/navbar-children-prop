import React, { Children } from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// function Nav({ children }) {
//   let items = React.Children.toArray(children); 
//   for(let i = items.length - 1; i >= 1; i--) {
//     items.splice(i, 0, <span key={i} className='separator'>|</span>);
//   }
//   return (<div>{items}</div>);
// }
// function Main() {
//   return (
//     <Nav>
//       <NavItem url='/'>Home</NavItem>
//       <NavItem url='/about'>About</NavItem> <NavItem url='/contact'>Contact</NavItem>
//     </Nav>
//   )
// };

function ErrorBox({ children }) {
  return (
    <>
      { children }
    </>
  );
}

function FirstChildOnly({ children }) {
  const items = React.Children.toArray(children);
  console.log('items', items);
  return (
    <>
      { items[0] }
    </>
  )
}
function MainFirstChild() {
  return (
    <FirstChildOnly>
        <h1>Hello Asif</h1>
        <h2>Hi</h2>
        <h3>Okay!</h3>
    </FirstChildOnly>
  )
}

function LastChildOnly({ children }) {
  const items = React.Children.toArray(children);
  return (
    <>
      {items[items.length - 1]}
    </>
  );
}
const MainLastChild = () => {
  return (
    <LastChildOnly>
      <h3>I am Okay.</h3>
      <h3>Yeah</h3>
      <h4>I am the last child</h4>
    </LastChildOnly>
  )
}
function Head({ children }) {
  const items = React.Children.toArray(children);
  return (
    <>
      {items[0]}
    </>
  )
}
function Tail({ children }) {
  const items = React.Children.toArray(children);
  return (
    <>
      {items[items.length-1]}
    </>
  );
}
Tail.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
  ])
}

function Title({ children }) {
  return (
    <h1>
      {children}
    </h1>
  )
};
function Body({ children }) {
  return (
    <p>
      {children}
    </p>
  )
}
function Footer({ children }) {
  return (
    <footer>
      <h3>{children}</h3>
    </footer>
  )
}
function Dialog({ children }) {
  const items = Children.toArray(children);
  return (
    items.map((item, index) => {
      return (
        <div key={index}>
          {item}
        </div>
      );
    })
  )
}
ReactDOM.render(
  <Dialog>
    <Title>
      This is the headline text
    </Title>
    <Body>
      This is the body text
    </Body>
    <Footer>
      This is my footer text
    </Footer>
  </Dialog>, 
  document.querySelector('#root')
)
