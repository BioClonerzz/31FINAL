const defaultContent = `lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum.`

export default function PageContent({ content = defaultContent }) {
  return <main className="bg-gray-100 rounded-md p-6">{content}</main>
}
