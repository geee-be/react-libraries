import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import { Dialog } from './index.js';

const meta = {
  component: Dialog,
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Dialog.Trigger asChild>
          <Button variant="solid" color="primary">
            Open Dialog
          </Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>
              This is a simple dialog example with a title and description.
            </Dialog.Description>
          </Dialog.Header>
          <div className="py-4">
            <p className="text-sm">
              This is the main content area of the dialog. You can put any
              content here.
            </p>
          </div>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Dialog.Close>
            <Button variant="solid" color="primary">
              Confirm
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </>
    ),
  },
};

export const WithForm: Story = {
  args: {
    children: (
      <>
        <Dialog.Trigger asChild>
          <Button variant="solid" color="info">
            Edit Profile
          </Button>
        </Dialog.Trigger>
        <Dialog.Content className="sm:max-w-[425px]">
          <Dialog.Header>
            <Dialog.Title>Edit Profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description>
          </Dialog.Header>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              {/** biome-ignore lint/correctness/useUniqueElementIds: story example */}
              <Input id="name" defaultValue="John Doe" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              {/** biome-ignore lint/correctness/useUniqueElementIds: story example */}
              <Input
                id="username"
                defaultValue="@john.doe"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              {/** biome-ignore lint/correctness/useUniqueElementIds: story example */}
              <Input
                id="email"
                defaultValue="john@example.com"
                className="col-span-3"
              />
            </div>
          </div>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Dialog.Close>
            <Button variant="solid" color="primary">
              Save Changes
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </>
    ),
  },
};

export const Confirmation: Story = {
  args: {
    children: (
      <>
        <Dialog.Trigger asChild>
          <Button variant="solid" color="error">
            Delete Account
          </Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Are you absolutely sure?</Dialog.Title>
            <Dialog.Description>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Dialog.Close>
            <Button variant="solid" color="error">
              Delete Account
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </>
    ),
  },
};

export const NoHeader: Story = {
  args: {
    children: (
      <>
        <Dialog.Trigger asChild>
          <Button variant="outline" color="secondary">
            Simple Dialog
          </Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <div className="py-4">
            <p className="text-center">
              This is a simple dialog without a header. Just some content and
              action buttons.
            </p>
          </div>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="outline">Close</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </>
    ),
  },
};

export const LongContent: Story = {
  args: {
    children: (
      <>
        <Dialog.Trigger asChild>
          <Button variant="solid" color="warning">
            Terms & Conditions
          </Button>
        </Dialog.Trigger>
        <Dialog.Content className="max-h-[80vh]">
          <Dialog.Header>
            <Dialog.Title>Terms and Conditions</Dialog.Title>
            <Dialog.Description>
              Please read our terms and conditions carefully.
            </Dialog.Description>
          </Dialog.Header>
          <div className="py-4 overflow-y-auto">
            <div className="space-y-4 text-sm">
              {/* cspell:disable */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur.
              </p>
              {/* cspell:enable */}
            </div>
          </div>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="outline">Decline</Button>
            </Dialog.Close>
            <Button variant="solid" color="success">
              Accept
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </>
    ),
  },
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <Button variant="solid" color="primary">
            Controlled Dialog
          </Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Controlled Dialog</Dialog.Title>
            <Dialog.Description>
              This dialog's open state is controlled by React state.
            </Dialog.Description>
          </Dialog.Header>
          <div className="py-4">
            <p className="text-sm">
              The dialog is currently{' '}
              <span className="font-semibold">{open ? 'open' : 'closed'}</span>.
            </p>
          </div>
          <Dialog.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close Programmatically
            </Button>
            <Button
              variant="solid"
              color="primary"
              onClick={() => setOpen(false)}
            >
              Confirm & Close
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    );
  },
};

export const CustomStyling: Story = {
  args: {
    children: (
      <>
        <Dialog.Trigger asChild>
          <Button variant="solid" color="secondary">
            Custom Styled Dialog
          </Button>
        </Dialog.Trigger>
        <Dialog.Content className="sm:max-w-md border-secondary/70 bg-gradient-to-br from-primary/5 to-secondary/5">
          <Dialog.Header>
            <Dialog.Title className="text-primary">Custom Styling</Dialog.Title>
            <Dialog.Description className="text-secondary">
              This dialog has custom styling applied to demonstrate
              customization options.
            </Dialog.Description>
          </Dialog.Header>
          <div className="py-4">
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm">
                You can customize the appearance of dialogs by applying custom
                CSS classes to the Dialog.Content and other components.
              </p>
            </div>
          </div>
          <Dialog.Footer className="gap-2">
            <Dialog.Close asChild>
              <Button variant="outline" color="secondary">
                Close
              </Button>
            </Dialog.Close>
            <Button variant="solid" color="primary">
              Continue
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </>
    ),
  },
};
