# Text over images

Use an overlay so words stay readable over a busy image.

## Try it

1. Turn the overlay off and on.
2. Compare the smaller text as well as the heading.

## How it works

### 1. Layer the content

relative anchors the image. isolate keeps the layers inside this example. The text remains real HTML instead of being baked into the image.

```jsx
<div className="relative isolate min-h-72 overflow-hidden">
  <Image
    src="/landscape.svg"
    fill
    alt=""
    sizes="100vw"
    className="-z-20 object-cover"
  />
  <div className="absolute inset-0 -z-10 bg-black/65" />
  <h2 className="text-white">Take the scenic route</h2>
</div>
```

### 2. Test the contrast

An overlay helps, but it is not an automatic contrast check. Test the actual text against its background, including at narrow widths. Decorative images can use alt="".

```jsx
{
  overlay && <div className="absolute inset-0 -z-10 bg-black/65" />;
}
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.
