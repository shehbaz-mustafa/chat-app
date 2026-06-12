# @repo/ui - ChatApp UI Components

A collection of reusable React components for building interactive chat applications.

## Components

### ChatBubble
Displays individual chat messages with styling for own and other messages.

**Props:**
- `message: string` - The message content
- `sender: string` - Name of the sender
- `isOwn?: boolean` - Whether this is the current user's message (default: false)
- `timestamp?: string` - Optional timestamp to display

**Example:**
```tsx
import { ChatBubble } from "@repo/ui/chat-bubble";

<ChatBubble
  message="Hello! How are you?"
  sender="Alex"
  isOwn={false}
  timestamp="10:30"
/>
```

### RoomHeader
Displays the chat room header with name, member count, and settings button.

**Props:**
- `roomName: string` - The name of the chat room
- `memberCount?: number` - Number of members in the room (default: 0)
- `onSettingsClick?: () => void` - Callback when settings button is clicked
- `description?: string` - Optional room description

**Example:**
```tsx
import { RoomHeader } from "@repo/ui/room-header";

<RoomHeader
  roomName="general"
  memberCount={5}
  onSettingsClick={() => console.log('Settings')}
  description="General discussion"
/>
```

### MessageContainer
Container for displaying multiple chat messages with optional loading state.

**Props:**
- `children: ReactNode` - Messages to display
- `loading?: boolean` - Show loading indicator (default: false)

**Example:**
```tsx
import { MessageContainer } from "@repo/ui/message-container";

<MessageContainer loading={false}>
  {messages.map(msg => (
    <ChatBubble key={msg.id} {...msg} />
  ))}
</MessageContainer>
```

### InputFooter
Input area with send button for typing and sending messages.

**Props:**
- `placeholder?: string` - Placeholder text for input
- `onSendMessage: (message: string) => void` - Callback when message is sent
- `onTyping?: () => void` - Callback when user is typing
- `disabled?: boolean` - Disable input and button (default: false)

**Example:**
```tsx
import { InputFooter } from "@repo/ui/input-footer";

<InputFooter
  placeholder="Type a message..."
  onSendMessage={(msg) => console.log(msg)}
  disabled={false}
/>
```

### UserProfile
Displays user information with avatar and status indicator.

**Props:**
- `user: UserProfile` - User object with name, status, and optional avatar
- `onClick?: () => void` - Optional click handler

**User Object:**
```tsx
interface UserProfile {
  name: string;
  status: "online" | "offline" | "away";
  avatar?: string;
}
```

**Example:**
```tsx
import { UserProfile } from "@repo/ui/user-profile";

<UserProfile
  user={{ name: "John", status: "online" }}
  onClick={() => console.log('User clicked')}
/>
```

### ChatLayout
Main layout component for chat applications with header, messages, input, and optional sidebar.

**Props:**
- `header: ReactNode` - Header component
- `messages: ReactNode` - Messages display area
- `input: ReactNode` - Input component
- `sidebar?: ReactNode` - Optional sidebar for additional content

**Example:**
```tsx
import { ChatLayout } from "@repo/ui/chat-layout";

<ChatLayout
  header={<RoomHeader roomName="general" />}
  messages={<MessageContainer>{messages}</MessageContainer>}
  input={<InputFooter onSendMessage={handleSend} />}
  sidebar={<UserList users={users} />}
/>
```

### Other Components

#### Button
Basic button component with customizable styling.

**Props:**
- `children: ReactNode` - Button content
- `className?: string` - CSS class name
- `appName: string` - Application name for alert message

#### TextInput
Text input field with size variants.

**Props:**
- `placeholder: string` - Placeholder text
- `size: "big" | "small"` - Input size
- `onChange: (e: any) => void` - Change handler

#### Card
Card component for displaying information with title and children.

**Props:**
- `title: string` - Card title
- `children: React.ReactNode` - Card content
- `href: string` - Link URL
- `className?: string` - CSS class name

## Styling

All components use inline styles with a consistent color scheme:
- Primary: `#667eea` to `#764ba2` (gradient)
- Secondary: `#E5E5EA` (light gray)
- Success: `#34C759` (green)
- Warning: `#FF9500` (orange)
- Error: `#999999` (gray)

## Usage in Next.js

Import components from the UI package:

```tsx
import { ChatBubble, RoomHeader, InputFooter } from "@repo/ui";

export default function ChatPage() {
  return (
    <div>
      <RoomHeader roomName="general" />
      <MessageContainer>
        <ChatBubble message="Hello!" sender="Alice" />
      </MessageContainer>
      <InputFooter onSendMessage={handleSend} />
    </div>
  );
}
```

## Development

To add new components, use the turbo generator:

```bash
npm run generate:component -- --name ComponentName
```

To check types:

```bash
npm run check-types
```

To lint:

```bash
npm run lint
```
