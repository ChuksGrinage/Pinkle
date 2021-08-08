// import * as React from 'react'

// test('renders all the book information', async () => {
//   const {book} = await renderBookScreen({listItem: null})

//   expect(screen.getByRole('heading', {name: book.title})).toBeInTheDocument()
//   expect(screen.getByText(book.author)).toBeInTheDocument()
//   expect(screen.getByText(book.publisher)).toBeInTheDocument()
//   expect(screen.getByText(book.synopsis)).toBeInTheDocument()
//   expect(screen.getByRole('img', {name: /book cover/i})).toHaveAttribute(
//     'src',
//     book.coverImageUrl,
//   )
//   expect(screen.getByRole('button', {name: /add to list/i})).toBeInTheDocument()

//   expect(
//     screen.queryByRole('button', {name: /remove from list/i}),
//   ).not.toBeInTheDocument()
//   expect(
//     screen.queryByRole('button', {name: /mark as read/i}),
//   ).not.toBeInTheDocument()
//   expect(
//     screen.queryByRole('button', {name: /mark as unread/i}),
//   ).not.toBeInTheDocument()
//   expect(
//     screen.queryByRole('textbox', {name: /notes/i}),
//   ).not.toBeInTheDocument()
//   expect(screen.queryByRole('radio', {name: /star/i})).not.toBeInTheDocument()
//   expect(screen.queryByLabelText(/start date/i)).not.toBeInTheDocument()
// })
