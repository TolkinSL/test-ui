import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Group, Box, Collapse, ThemeIcon, UnstyledButton, rem } from '@mantine/core';
// import { IconCalendarStats, IconChevronRight } from '@tabler/icons-react';
import classes from './navbar-links-group.module.scss';
import cn from 'classnames';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links }: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    // <Text<'a'>
    //   component="a"
    //   className={classes.link}
    //   href={link.link}
    //   key={link.label}
    //   onClick={(event) => event.preventDefault()}
    // >
    //   {link.label}
    // </Text>
    <NavLink to={link.link} className={({isActive}) => cn(classes.link, {[classes.link_active]: isActive})} key={link.label}>{link.label}</NavLink>
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="white" size={40}>
              <Icon style={{ width: rem(40), height: rem(40) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {/*{hasLinks && (*/}
          {/*  <IconChevronRight*/}
          {/*    className={classes.chevron}*/}
          {/*    stroke={1.5}*/}
          {/*    style={{*/}
          {/*      width: rem(16),*/}
          {/*      height: rem(16),*/}
          {/*      transform: opened ? 'rotate(-90deg)' : 'none',*/}
          {/*    }}*/}
          {/*  />*/}
          {/*)}*/}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
