# Feedback and loading

Use alerts, progress, loading shapes, and short notifications.

## Try it

1. Choose Loading, Ready, and Empty to compare the messages.
2. In Ready, add progress. Notice the number and bar change together.
3. Show a notification. It is short; the important result stays on the page.

## How it works

### 1. Match the message to the state

A loading shape reserves space. A spinner indicates activity. Empty explains why no content is shown and offers a next step. These buttons simulate states; they do not send a network request.

```jsx
{
  status === "loading" && <Skeleton className="h-20 w-full" />;
}
```

### 2. Keep a visible result

An alert remains in the page. A toast is a short notification. Use visible text for important details instead of relying on color or a disappearing message.

```jsx
<Alert>
  <AlertTitle>Activity list ready</AlertTitle>
  <AlertDescription>Two sample activities are available.</AlertDescription>
</Alert>
```

### 3. Share one progress value

Both the progress bar and text read progress. Pass a useful label. The site already mounts the Sonner Toaster once in its provider.

```jsx
<Progress value={progress} aria-label="Practice progress" />
<p>{progress}% complete</p>
// Existing shared Toaster displays this:
toast.success("Practice progress noted.");
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.
