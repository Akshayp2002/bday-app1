# 🎀 Customize Your Birthday App

## 1. Change the birthday person's name

Open [`app/page.js`](app/page.js) and edit this line:

```js
const birthdayName = "Bestie";
```

Example:

```js
const birthdayName = "Sarah";
```

## 2. Add your own photos

Place your images in the [`public/images/`](public/images/) folder.

Expected files:

- `birthday-girl.jpg` — the main birthday photo
- `memory.jpg` — a second favorite photo

You can use `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, or `.avif`.

### Want to change filenames?

Edit [`app/components/WishDashboard.js`](app/components/WishDashboard.js) and update the `PhotoCard` `src` props:

```jsx
<PhotoCard src="/images/your-photo.jpg" alt="..." caption="..." />
```

## 3. Change the birthday messages

Still in [`app/components/WishDashboard.js`](app/components/WishDashboard.js), find the `DEFAULT_MESSAGES` array and edit the text:

```js
const DEFAULT_MESSAGES = [
  {
    icon: Heart,
    text: "Your custom message here!",
  },
  // ...
];
```

Available icons from `lucide-react`: `Heart`, `Cake`, `Stars`, `Gift`, `Sparkles`, etc.

## 4. Adjust the colors or theme

Open [`app/globals.css`](app/globals.css) and update the CSS variables:

```css
:root {
  --rose-400: #fb7185;
  --violet-400: #a78bfa;
  /* ... */
}
```

## 5. Run locally

```bash
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000).

## 6. Deploy

You can deploy this for free on [Vercel](https://vercel.com):

```bash
npx vercel
```

Share the link via WhatsApp, Instagram, or anywhere you like!
