// Color palette stories demonstrating the theme system
// This shows all color variants and how they work in light/dark modes

import { Button } from './components/Button';

interface Story {
  render: () => JSX.Element;
  parameters?: {
    backgrounds?: { default: string };
  };
}

const meta = {
  title: 'Colors/Color Palette',
};

export default meta;

export const Buttons: Story = {
  render: () => (
    <div className="p-8 min-h-screen">
      <div className="grid grid-cols-8 gap-4">
        <button type="button" className="col-1 like-button">
          Test
        </button>
        <button type="button" className="like-button" data-focus={true}>
          Focus
        </button>
        <button type="button" className="like-button" data-active={true}>
          Active
        </button>
        <button type="button" className="like-button" data-hover={true}>
          Hover
        </button>
        <button type="button" className="like-button" disabled={true}>
          Disabled
        </button>

        <button type="button" className="col-1 like-outline-button">
          Test
        </button>
        <button type="button" className="like-outline-button" data-focus={true}>
          Focus
        </button>
        <button
          type="button"
          className="like-outline-button"
          data-active={true}
        >
          Active
        </button>
        <button type="button" className="like-outline-button" data-hover={true}>
          Hover
        </button>
        <button type="button" className="like-outline- button" disabled={true}>
          Disabled
        </button>

        <button type="button" className="col-1 like-button default-primary">
          Primary
        </button>
        <button type="button" className="like-button default-secondary">
          Secondary
        </button>
        <button type="button" className="like-button default-gray">
          Gray
        </button>
        <button type="button" className="like-button default-info">
          Info
        </button>
        <button type="button" className="like-button default-warning">
          Warning
        </button>
        <button type="button" className="like-button default-success">
          Success
        </button>
        <button type="button" className="like-button default-error">
          Error
        </button>
        <button type="button" className="like-button default-danger">
          Danger
        </button>

        <button
          type="button"
          className="col-1 like-outline-button default-primary"
        >
          Primary
        </button>
        <button type="button" className="like-outline-button default-secondary">
          Secondary
        </button>
        <button type="button" className="like-outline-button default-gray">
          Gray
        </button>
        <button type="button" className="like-outline-button default-info">
          Info
        </button>
        <button type="button" className="like-outline-button default-warning">
          Warning
        </button>
        <button type="button" className="like-outline-button default-success">
          Success
        </button>
        <button type="button" className="like-outline-button default-error">
          Error
        </button>
        <button type="button" className="like-outline-button default-danger">
          Danger
        </button>

        <Button color="primary" className="col-1">
          Primary
        </Button>
        <Button color="secondary">Secondary</Button>
        <Button color="gray">Gray</Button>
        <Button color="info">Info</Button>
        <Button color="warning">Warning</Button>
        <Button color="success">Success</Button>
        <Button color="error">Error</Button>
        <Button color="danger">Danger</Button>

        <Button variant="outline" color="primary" className="col-1">
          Primary
        </Button>
        <Button variant="outline" color="secondary">
          Secondary
        </Button>
        <Button variant="outline" color="gray">
          Gray
        </Button>
        <Button variant="outline" color="info">
          Info
        </Button>
        <Button variant="outline" color="warning">
          Warning
        </Button>
        <Button variant="outline" color="success">
          Success
        </Button>
        <Button variant="outline" color="error">
          Error
        </Button>
        <Button variant="outline" color="danger">
          Danger
        </Button>
      </div>
    </div>
  ),
};

export const Inputs: Story = {
  render: () => (
    <div className="p-8 min-h-screen">
      <div className="grid grid-cols-6 gap-4">
        <input className="col-1 like-input" placeholder="Test" />
        <input className="like-input" placeholder="Test" value="With a value" />
        <input className="like-input" placeholder="Test" data-focus={true} />
        <input className="like-input" placeholder="Test" data-hover={true} />
        <input className="like-input" placeholder="Test" disabled />
        <input
          className="like-input"
          placeholder="Test"
          disabled
          value="With a value"
        />
      </div>
    </div>
  ),
};
