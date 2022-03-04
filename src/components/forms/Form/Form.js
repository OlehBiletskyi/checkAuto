import { Form } from 'react-bootstrap';
import { CustomButton } from '../Button/Button';

export function CustomForm({ carNumber, setCarNumber, checkCar, formTitle }) {
  return (
    <Form onSubmit={e => {
      e.preventDefault();
      checkCar();
    }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Введіть серію та номер авто латиницею:</Form.Label>
        <Form.Control
          type="input"
          placeholder="AA0000AA"
          value={carNumber}
          onChange={e => setCarNumber(e.target.value)}
        />
      </Form.Group>
      <CustomButton variant='primary' type='submit' title='Відправити'/>
    </Form>
  )
}