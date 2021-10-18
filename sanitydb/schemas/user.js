import { UserIcon } from '@sanity/icons'

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
      },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
        name: 'points',
        title: 'Points',
        type: 'number',
    }
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
}
