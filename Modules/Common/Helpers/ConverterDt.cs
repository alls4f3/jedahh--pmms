﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Web;

namespace AmtarApp.Modules.Common.Helpers
{
    public class ConverterDt
    {

        public DataTable ToDataTable<T>(IEnumerable<T> data)
        {
            PropertyDescriptorCollection props =
         TypeDescriptor.GetProperties(typeof(T));
            DataTable table = new DataTable();
           
            for (int i = 0; i < props.Count; i++)
            {
                PropertyDescriptor prop = props[i];
                table.Columns.Add(prop.Name, prop.PropertyType);
            }
            object[] values = new object[props.Count];
            foreach (T item in data)
            {
                for (int i = 0; i < values.Length; i++)
                {
                    values[i] = props[i].GetValue(item);
                }
                table.Rows.Add(values);
            }
            return table;
        }
    }
}