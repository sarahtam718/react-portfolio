import React from 'react';
import Button from './button';

const PortCard = props => {
  return (
    <div
      className='card-style'
      onClick={function() {
        props.handleActive(props.obj.id);
      }}
    >
      <div>
        <div>
          <h5 className='card-title'>
            <strong>{props.obj.title}</strong>
          </h5>
          <ul>
            <li>
              <strong>Skills: </strong>
              {props.obj.skills}
            </li>
            <br />
            <li>
              <strong>Summary: </strong>
              {props.obj.summary}
            </li>
            <br />
            <li>
              <strong>My Role: </strong>
              {props.obj.role}
            </li>
          </ul>
        </div>
        <div style={{ display: 'flex' }}>
          <a
            href={props.obj.githubLink}
            className='btn'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              backgroundColor: '#613A43',
              color: 'white',
              height: 40,
              width: 150,
              margin: 'auto',
              marginBottom: 20,
              letterSpacing: 0.5
            }}
          >
            Github Code
          </a>
          <a
            href={props.obj.deployedLink}
            className='link-button btn'
            target='_blank'
            rel='noopener noreferrer'
            // style={{
            //   backgroundColor: "#613A43",
            //   color: "white",
            //   height: 40,
            //   width: 150,
            //   margin: "auto",
            //   marginBottom: 20,
            //   letterSpacing: 0.5
            // }}
          >
            Deployed Link
          </a>
          <Button link={props.obj.deployedLink} display='Deployed Link' />
          <Button link={props.obj.githubLink} display='Github Link' />
        </div>
      </div>
    </div>
  );
};

export default PortCard;
