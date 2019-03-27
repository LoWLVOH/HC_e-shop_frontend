import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


const Myconnexion = ({ user, userCheck, userSubmit, handleChange, toggle, isOpen, loginToggle, login, className}) => {

    let layout = (
        <>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="E-mail" onChange={handleChange} value={user.email} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} value={user.password} required />
                    </FormGroup>
                    <Button type="submit" onClick={userCheck}>Submit</Button>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={loginToggle}>Create an account</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </>
    )

    if (!login) {
        layout = (
            <>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="E-mail" onChange={handleChange} value={user.email} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password (6 caractères min.) </Label>
                            <Input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} value={user.password} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">Confirm Password</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" onChange={handleChange} value={user.confirmPassword} required />
                        </FormGroup>
                        <Button type="submit" onClick={userSubmit}>Submit</Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={loginToggle}>Go to Login</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </>
        )
    }
    
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Connexion</ModalHeader>
                {layout}
            </Modal>
        </div>
    )
}

export default Myconnexion