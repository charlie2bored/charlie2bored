import {
  IconAddressBook,
  IconBriefcase,
  IconChartBar,
  IconCode,
  IconFileText,
  IconFileTypePdf,
  IconFolder,
  IconMasksTheater,
  IconPalette,
  IconSchool,
} from '@tabler/icons-react';
import type { DriveIcon } from '@/lib/drive';

export const ICONS: Record<DriveIcon, typeof IconFolder> = {
  folder: IconFolder,
  chart: IconChartBar,
  doc: IconFileText,
  pdf: IconFileTypePdf,
  contact: IconAddressBook,
  briefcase: IconBriefcase,
  masks: IconMasksTheater,
  school: IconSchool,
  code: IconCode,
  palette: IconPalette,
};
