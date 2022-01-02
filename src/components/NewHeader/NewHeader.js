import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const styledLogo = styled.h1`
  display: inline;
`;

const NewHeader = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              alt=''
              src='/logo.svg'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />
            <styledLogo>Hello</styledLogo>
          </Navbar.Brand>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
          <Nav.Link href='#action1'>Home</Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default NewHeader;
