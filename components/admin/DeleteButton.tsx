'use client'

import { useRef } from 'react'

export default function DeleteButton({
  action,
  id,
  label = 'Hapus',
  confirmMessage = 'Yakin ingin menghapus item ini?',
}: {
  action: (formData: FormData) => Promise<void>
  id: string
  label?: string
  confirmMessage?: string
}) {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form ref={formRef} action={action}>
      <input type="hidden" name="id" value={id} />
      <button
        type="button"
        className="rounded-lg border border-red-500/20 px-3 py-1 text-xs text-red-400 transition-colors hover:bg-red-500/10"
        onClick={() => {
          if (confirm(confirmMessage)) formRef.current?.requestSubmit()
        }}
      >
        {label}
      </button>
    </form>
  )
}
