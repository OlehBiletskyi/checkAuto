import { Button } from 'react-bootstrap';

export function CustomButton({ title, variant, type }) {
  return (
    <Button variant={variant} type={type}>
      {title}
    </Button>
  );
}