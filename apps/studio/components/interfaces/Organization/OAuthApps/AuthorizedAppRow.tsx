import dayjs from 'dayjs'
import { Trash } from 'lucide-react'

import Table from 'components/to-be-cleaned/Table'
import type { AuthorizedApp } from 'data/oauth/authorized-apps-query'
import { Button } from 'ui'

export interface AuthorizedAppRowProps {
  app: AuthorizedApp
  onSelectRevoke: () => void
}

const AuthorizedAppRow = ({ app, onSelectRevoke }: AuthorizedAppRowProps) => {
  return (
    <Table.tr>
      <Table.td>
        <div
          className="w-[30px] h-[30px] rounded-full bg-no-repeat bg-cover bg-center border border-control flex items-center justify-center"
          style={{ backgroundImage: app.icon ? `url('${app.icon}')` : 'none' }}
        >
          {!!app.icon ? '' : `${app.name[0]}`}
        </div>
      </Table.td>
      <Table.td>{app.name}</Table.td>
      <Table.td>{app.created_by}</Table.td>
      <Table.td>
        <p className="font-mono truncate w-[220px]" title={app.app_id}>
          {app.app_id}
        </p>
      </Table.td>
      <Table.td>{dayjs(app.authorized_at).format('DD/MM/YYYY, HH:mm:ss')}</Table.td>
      <Table.td align="right">
        <Button type="default" icon={<Trash />} className="px-1" onClick={() => onSelectRevoke()} />
      </Table.td>
    </Table.tr>
  )
}

export default AuthorizedAppRow
