import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';

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
        <DialogTrigger asChild>
          <Button variant="solid" color="primary">
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a simple dialog example with a title and description.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm">
              This is the main content area of the dialog. You can put any
              content here.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="solid" color="primary">
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
};

export const WithForm: Story = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button variant="solid" color="info">
            Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
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
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="solid" color="primary">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
};

export const Confirmation: Story = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button variant="solid" color="error">
            Delete Account
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="solid" color="error">
              Delete Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
};

export const NoHeader: Story = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button variant="outline" color="secondary">
            Simple Dialog
          </Button>
        </DialogTrigger>
        <DialogContent>
          <div className="py-4">
            <p className="text-center">
              This is a simple dialog without a header. Just some content and
              action buttons.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
};

export const LongContent: Story = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button variant="solid" color="warning">
            Terms & Conditions
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Terms and Conditions</DialogTitle>
            <DialogDescription>
              Please read our terms and conditions carefully.
            </DialogDescription>
          </DialogHeader>
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
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Decline</Button>
            </DialogClose>
            <Button variant="solid" color="success">
              Accept
            </Button>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="solid" color="primary">
            Controlled Dialog
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled Dialog</DialogTitle>
            <DialogDescription>
              This dialog's open state is controlled by React state.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm">
              The dialog is currently{' '}
              <span className="font-semibold">{open ? 'open' : 'closed'}</span>.
            </p>
          </div>
          <DialogFooter>
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
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const CustomStyling: Story = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button variant="solid" color="secondary">
            Custom Styled Dialog
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md border-secondary/70 bg-gradient-to-br from-primary/5 to-secondary/5">
          <DialogHeader>
            <DialogTitle className="text-primary">Custom Styling</DialogTitle>
            <DialogDescription className="text-secondary">
              This dialog has custom styling applied to demonstrate
              customization options.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm">
                You can customize the appearance of dialogs by applying custom
                CSS classes to the DialogContent and other components.
              </p>
            </div>
          </div>
          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button variant="outline" color="secondary">
                Close
              </Button>
            </DialogClose>
            <Button variant="solid" color="primary">
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
};
