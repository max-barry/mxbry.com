// import React, { Component } from 'react';
// import styled from 'react-emotion';
// import { colors, bs, transitionTimes } from '../../settings';

// const dimension = 16;
// const scaleUp = 0.3;

// const Nav = styled('nav')({
//     display: 'flex',
//     flexDirection: 'column',
//     position: 'fixed',
//     right: bs(3),
//     top: '50%',
//     transform: 'translateY(-50%)',
//     zIndex: 0,
//     '&::before': {
//         content: '""',
//         position: 'absolute',
//         top: 0,
//         bottom: 0,
//         left: '50%',
//         transform: 'translateX(-1px)',
//         width: 2,
//         backgroundColor: colors.grey1,
//         zIndex: -1
//     }
// });

// const Button = styled('button')({
//     border: `1px solid ${colors.greyDark}`,
//     borderRadius: '50%',
//     boxShadow: 'none',
//     backgroundColor: colors.grey2,
//     width: dimension,
//     height: dimension,
//     cursor: 'pointer',
//     transition: `transform ${transitionTimes.minimal}ms ease-out`,
//     '&:not(:last-child)': {
//         marginBottom: bs(2)
//     },
//     '&:hover': {
//         transform: `scale(${1 + scaleUp})`,
//         span: {
//             transform: `translateX(-100%) scale(${1 / (1 + scaleUp)})`,
//             opacity: 1
//         }
//     }
// });

// const Label = styled('span')({
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     display: 'block',
//     width: 100,
//     textAlign: 'left',
//     transform: `scale(${1 / (1 + scaleUp)})`,
//     opacity: 0,
//     transition: `opacity ${transitionTimes.weak}ms, transform ${
//         transitionTimes.short
//     }ms ease-out`
// });

// class Waypoint extends Component {
//     state = { isOpen: false };

//     onToggle = () => {
//         this.setState({ isOpen: !this.state.isOpen });
//     };

//     render = () => (
//         <Nav>
//             <Button onClick={this.onToggle}>
//                 <Label>This is label</Label>
//             </Button>
//             <Button onClick={this.onToggle} />
//             <Button onClick={this.onToggle} />
//             <Button onClick={this.onToggle} />
//         </Nav>
//     );
// }

// export default Waypoint;
