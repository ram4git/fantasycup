import { MdSportsCricket as icon } from 'react-icons/md'

export default {
  name: 'match',
  title: 'Match',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      },
    {
      name: 'teamA',
      title: 'Team A',
      type: 'string',
    },
    {
      name: 'teamB',
      title: 'Team B',
      type: 'string',
    },
    {
      name: 'matchDate',
      title: 'Match date',
      type: 'datetime',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 8,
      },
    },
    {
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    },
    {
      name: 'popularity',
      title: 'Popularity',
      type: 'number',
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'teamAMembers',
      title: 'A Members',
      type: 'array',
      of: [{type: 'user'}],
    },
    {
      name: 'teamBMembers',
      title: 'B Members',
      type: 'array',
      of: [{type: 'user'}],
      },
    {
      name: 'winner',
      title: 'Winner',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      teamA: 'teamA',
      teamB: 'teamB',
      date: 'releaseDate',
      media: 'poster',
    },
    prepare(selection) {
    //   const year = selection.date && selection.date.split('-')[0]
    //   const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

      return {
        // title: `${selection.title} ${year ? `(${year})` : ''}`,
        // date: selection.date,
        // subtitle: cast,
        // media: selection.media,
        ...selection
      }
    },
  },
}
